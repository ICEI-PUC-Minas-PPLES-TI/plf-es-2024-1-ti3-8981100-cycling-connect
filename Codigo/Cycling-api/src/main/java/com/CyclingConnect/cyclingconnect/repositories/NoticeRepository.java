package com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.notices.Notice;
import java.util.Date;
import java.util.List;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

    List<Notice> findByTitle(String title);
}
