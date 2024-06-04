package com.CyclingConnect.cyclingconnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.CyclingConnect.cyclingconnect.models.notices.Notice;
import com.CyclingConnect.cyclingconnect.repositories.NoticeRepository;

import java.util.List;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    public List<Notice> findAllNotices() {
        return noticeRepository.findAll();
    }

    public Notice saveNotice(Notice notice) {
        return noticeRepository.save(notice);
    }

    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }
}
