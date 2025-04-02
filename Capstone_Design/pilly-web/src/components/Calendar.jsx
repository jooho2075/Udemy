import { useRef, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { format, addDays, subDays } from "date-fns";
import { ko } from "date-fns/locale";
import "react-horizontal-scrolling-menu/dist/styles.css";

function HorizontalCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 초기 날짜 배열 설정 (5개만 보이게)
  const [days, setDays] = useState(() =>
    Array.from({ length: 5 }, (_, i) =>
      format(addDays(new Date(), i - 2), "yyyy-MM-dd (EEE)", { locale: ko })
    )
  );

  const scrollContainerRef = useRef(null);

  // 오른쪽 스크롤 이동 함수
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 150;
    }
  };

  // 왼쪽 스크롤 이동 함수
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 150;
    }
  };

  // 오른쪽 날짜 추가 함수
  const loadMoreDaysRight = () => {
    setDays((prevDays) => {
      const lastDateStr = prevDays[prevDays.length - 1].split(" ")[0];
      const lastDate = new Date(lastDateStr);

      if (isNaN(lastDate)) {
        console.error("lastDate 변환 실패!");
        return prevDays;
      }

      const newDays = Array.from({ length: 5 }, (_, i) =>
        format(addDays(lastDate, i + 1), "yyyy-MM-dd (EEE)", { locale: ko })
      );

      return [...prevDays, ...newDays]; // 새로운 날짜 추가
    });
  };

  // 왼쪽 날짜 추가 함수
  const loadMoreDaysLeft = () => {
    setDays((prevDays) => {
      const firstDateStr = prevDays[0].split(" ")[0];
      const firstDate = new Date(firstDateStr);

      if (isNaN(firstDate)) {
        console.error("firstDate 변환 실패!");
        return prevDays;
      }

      const newDays = Array.from({ length: 5 }, (_, i) =>
        format(subDays(firstDate, i + 1), "yyyy-MM-dd (EEE)", { locale: ko })
      ).reverse();

      return [...newDays, ...prevDays];
    });
  };

  return (
    <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: "100%", 
          background: "#F3F0F6", 
          padding: "10px", 
          position: 'relative' }}
    >
      {/* 왼쪽 버튼 */}
      <button 
        onClick={() => {
          loadMoreDaysLeft();
          scrollLeft();
        }}
        style={{
          height: "50px",
          width: "50px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: "10px",
          padding: "10px",
          cursor: "pointer",
          fontSize: 30
        }}
      >
        ◀
      </button>

      <div 
        style={{ 
          display: "flex",
          alignItems: "center",
          overflowX: "auto", 
          whiteSpace: "nowrap", 
          width: "60%", // 5개 날짜만 보이도록 조정
          position: "relative"
        }} 
        ref={scrollContainerRef}
      >
        <ScrollMenu>
          {days.map((day) => (
            <div 
              key={day}
              onClick={() => setSelectedDate(day)}
              style={{
                padding: "10px 20px",
                margin: "5px",
                borderRadius: "10px",
                fontSize: 20,
                background: selectedDate === day ? "#2678E4" : "gray",
                color: selectedDate === day ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {day}
            </div>
          ))}
        </ScrollMenu>
      </div>

      {/* 오른쪽 버튼 */}
      <button 
        onClick={() => {
          loadMoreDaysRight();
          scrollRight();
        }}
        style={{
          height: "50px",
          width: "50px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: "10px",
          padding: "10px",
          cursor: "pointer",
          fontSize: 30
        }}
      >
        ▶
      </button>
    </div>
  );
}

export default HorizontalCalendar;
