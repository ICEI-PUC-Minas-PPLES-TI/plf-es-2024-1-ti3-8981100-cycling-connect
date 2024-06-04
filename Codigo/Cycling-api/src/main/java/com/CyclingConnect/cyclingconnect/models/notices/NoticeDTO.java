package com.CyclingConnect.cyclingconnect.models.notices;

import java.util.Date;

/**
 * A classe NoticeDTO representa um Objeto de Transferência de Dados (DTO) para um aviso.
 * Ela encapsula os detalhes essenciais de um aviso, incluindo seu título, descrição, data de postagem e status.
 *
 * <p>Esta classe é um record, introduzido no Java 14, que fornece uma maneira concisa de criar classes que transportam dados.
 *
 * @param title O título do aviso. Este deve ser um nome curto e descritivo.
 * @param description Uma breve descrição do aviso. Esta fornece mais contexto e detalhes sobre o aviso.
 * @param datePosted A data da postagem do aviso.
 * @param status O status do aviso.
 */
public record NoticeDTO(String title, String description, Date datePosted, String status) {
    
}
