import { useState, useEffect } from "react";
import styled from "styled-components";

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

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }

  ${(props) =>
    !props.$isVisible &&
    ` // props.$isVisible 이 false일 때 적용
    opacity: 0;
    pointer-events: none; // 클릭 이벤트 비활성화
    transform: translateY(10px); // 아래로 살짝 내려가서 사라지는 효과 (선택 사항)
  `}
`;

const ScrollToTopButton = ({ threshold = 300, smoothScroll = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: smoothScroll ? "smooth" : "auto",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      handleScroll();

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
