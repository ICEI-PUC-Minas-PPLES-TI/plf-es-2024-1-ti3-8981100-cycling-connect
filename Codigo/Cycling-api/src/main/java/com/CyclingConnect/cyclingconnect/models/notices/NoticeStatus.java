package main.java.com.CyclingConnect.cyclingconnect.models.notices;

/**
 * A enumeração NoticeStatus representa os diferentes status de um aviso.
 *
 * <p>Os status possíveis são:
 * <ul>
 *     <li><strong>ACTIVE</strong>: Indica que o aviso está ativo e visível no quadro de avisos.</li>
 *     <li><strong>INACTIVE</strong>: Indica que o aviso não está mais ativo ou visível no quadro de avisos.</li>
 * </ul>
 *
 * @param status O status do aviso.
 */
public enum NoticeStatus {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    private final String status;

    NoticeStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}