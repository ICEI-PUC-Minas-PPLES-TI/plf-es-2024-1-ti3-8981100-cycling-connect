package com.CyclingConnect.cyclingconnect.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.CyclingConnect.cyclingconnect.models.notices.Notice;
import com.CyclingConnect.cyclingconnect.models.notices.NoticeDTO;
import com.CyclingConnect.cyclingconnect.models.notices.NoticeStatus;
import com.CyclingConnect.cyclingconnect.repositories.NoticeRepository;

@RestController
@RequestMapping("/notices")
public class NoticesController {

    @Autowired
    private NoticeRepository noticeRepository;

    /**
     * Endpoint para criar um novo aviso.
     * @param data Dados do aviso encapsulados em NoticeDTO.
     * @return ResponseEntity com status e mensagem de sucesso ou erro.
     */
    @PostMapping("/create")
    public ResponseEntity<?> createNotice(@RequestBody NoticeDTO data) {
        Notice newNotice = new Notice();
        newNotice.setTitle(data.title());
        newNotice.setDescription(data.description());
        newNotice.setDatePosted(LocalDateTime.now());
        newNotice.setStatus(NoticeStatus.ACTIVE);

        noticeRepository.save(newNotice);
        return ResponseEntity.status(HttpStatus.CREATED).body("Aviso criado com sucesso");
    }

    /**
     * Endpoint para listar todos os avisos.
     * @return ResponseEntity com a lista de avisos ou mensagem de erro.
     */
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllNotices() {
        List<Notice> notices = noticeRepository.findAll();
        if (notices.isEmpty()) {
            return ResponseEntity.badRequest().body("Nenhum aviso encontrado");
        }
        return ResponseEntity.ok(notices);
    }

    /**
     * Endpoint para deletar um aviso por título e data de postagem.
     * @param title O título do aviso a ser deletado.
     * @param datePosted A data em que o aviso foi postado.
     * @return ResponseEntity com status e mensagem de sucesso ou erro.
     */
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteNotice(@RequestParam String title, @RequestParam LocalDateTime datePosted) {
        List<Notice> notices = noticeRepository.findByTitleAndDatePosted(title, datePosted);
        if (notices.isEmpty()) {
            return ResponseEntity.badRequest().body("Nenhum aviso encontrado com o título e data especificados");
        }
        notices.forEach(noticeRepository::delete);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Avisos deletados com sucesso");
    }
}
