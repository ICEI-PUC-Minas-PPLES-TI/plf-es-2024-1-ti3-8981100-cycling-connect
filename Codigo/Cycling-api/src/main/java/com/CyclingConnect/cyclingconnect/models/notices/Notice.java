package com.CyclingConnect.cyclingconnect.models.notices;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Date;

/**
 * A classe Notice representa uma entidade de aviso que será armazenada no banco de dados.
 * Ela contém detalhes como título, descrição, data de postagem e status.
 *
 * <p>Esta classe usa anotações JPA para mapear a entidade para uma tabela no banco de dados e anotações de validação
 * para garantir que os campos atendam aos requisitos especificados.
 *
 * @param title O título do aviso. Deve ter no mínimo 3 caracteres.
 * @param description Uma breve descrição do aviso. Deve ter no mínimo 3 caracteres.
 * @param datePosted A data da postagem do aviso.
 * @param status O status do aviso, como Ativo ou Inativo.
 */
@Entity
@Table(name = "notices")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    @Size(min = 3, message = "O título deve ter no mínimo 3 caracteres")
    private String title;

    @Column(name = "description")
    @Size(min = 3, message = "A descrição deve ter no mínimo 3 caracteres")
    private String description;

    @Column(name = "date_posted", columnDefinition = "TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private Date datePosted;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private NoticeStatus status;
}
