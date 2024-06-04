package main.java.com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.notices.Notice;
import java.util.Date;
import java.util.List;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

    // Method to find notices by title
    List<Notice> findByTitle(String title);

    // Additional query methods can be added as needed, for example:
    List<Notice> findByStatus(String status);
    List<Notice> findByDatePosted(Date datePosted);
}
