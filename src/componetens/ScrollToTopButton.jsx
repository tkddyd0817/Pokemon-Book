import  { useState, useEffect } from "react";
import styled from "styled-components"; // styled-components 임포트!

// 🚀 Styled Components로 버튼 스타일 정의!
const StyledButton = styled.button`
 
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  padding: 10px 15px; 
  font-size: 1.25rem; 
  background-color: #ef4444; 
  color: black; 
  border: none; 
  border-radius: 9999px; 
  cursor: pointer; 
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; 
  opacity: 0.8; 
  z-index: 50; 
  
  /* hover 상태 스타일 */
  &:hover {
    opacity: 1; /* hover:opacity-100 */
    transform: translateY(-3px); /* 호버 시 살짝 떠오르는 효과 (선택 사항) */
  }

  /* 보이지 않을 때의 스타일 */
  ${(props) => !props.$isVisible && ` // props.$isVisible 이 false일 때 적용
    opacity: 0;
    pointer-events: none; // 클릭 이벤트 비활성화
    transform: translateY(10px); // 아래로 살짝 내려가서 사라지는 효과 (선택 사항)
  `}
`;


const ScrollToTopButton = ({
  threshold = 300, 
  smoothScroll = true 
}) => {
  
  const [isVisible, setIsVisible] = useState(false);

 
  const handleScroll = () => {
    
    if (typeof window !== 'undefined') { 
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    if (typeof window !== 'undefined') { // SSR 환경에서 window 객체 접근 방지
      window.scrollTo({
        top: 0, // 맨 위로
        behavior: smoothScroll ? "smooth" : "auto" // 부드러운 스크롤 또는 즉시 이동
      });
    }
  };

  // 스크롤 이벤트 리스너 등록/해제 (컴포넌트 마운트/언마운트 시)
  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      
      // 컴포넌트 마운트 시 초기 스크롤 위치를 확인하여 버튼 가시성 설정
      handleScroll(); 
      
      // 컴포넌트 언마운트 시 이벤트 리스너 해제 (메모리 누수 방지)
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [threshold]); 

  return (
   
    <StyledButton
      onClick={scrollToTop}
      aria-label="맨 위로 스크롤"
      $isVisible={isVisible} 
    >
      ↑ 
    </StyledButton>
  );
};

export default ScrollToTopButton;