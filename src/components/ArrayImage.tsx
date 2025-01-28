import {
  Box,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ProjectModal from "./ProjectModal";
import WorkModal from "./WorkModal";

interface StackItem {
  name: string;
  filename: string;
}

interface ArrayImageProps {
  data: StackItem[];
  type: "stack" | "tech" | "project" | "work";
}

const ArrayImage = ({ data, type }: ArrayImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<StackItem | null>(null);
  const [selectedWork, setSelectedWork] = useState<StackItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 현재 인덱스가 아니라, 페이지 인덱스로 관리
  const [pageIndex, setPageIndex] = useState(0);

  // 한 번에 표시되는 콘텐츠 개수 (반응형 대응)
  const visibleCount = useBreakpointValue({ base: 2, md: 4, lg: 5 }) || 5;

  // 전체 페이지 개수
  const totalPages = Math.ceil(data.length / visibleCount);

  const handleModal = (index: number) => {
    if (type === "project") {
      setSelectedProject(data[index]);
      onOpen();
    }
  };

  const handleClose = () => {
    onClose();
    setSelectedProject(null);
  };

  const moveToPrevious = () => {
    if (pageIndex > 0) {
      const newPageIndex = pageIndex - 1;
      setPageIndex(newPageIndex);
      containerRef.current!.style.transform = `translateX(-${
        newPageIndex * (250 + 16) * visibleCount
      }px)`;
    }
  };

  const moveToNext = () => {
    if (pageIndex < totalPages - 1) {
      const newPageIndex = pageIndex + 1;
      setPageIndex(newPageIndex);
      containerRef.current!.style.transform = `translateX(-${
        newPageIndex * (250 + 16) * visibleCount
      }px)`;
    }
  };

  return (
    <>
    {/* 페이지 인디케이터 */}
     {/* 페이지 인디케이터 (현재 위치 표시) */}
     <HStack justifyContent="flex-end" spacing={1} mt={3} w="100%">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <Box
            key={idx}
            w="30px" 
            h="4px"
            borderRadius="full"
            bg={idx === pageIndex ? "white" : "gray.500"} // 현재 페이지는 밝게
            transition="all 0.3s ease-in-out"
          />
        ))}
      </HStack>
    <Box position="relative" w="100%" overflow="hidden">
      {pageIndex > 0 && (
        <IconButton
          variant="ghost"
          onClick={moveToPrevious}
          color="white"
          aria-label={"previous"}
          icon={<FaChevronLeft />}
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="10"
          opacity={pageIndex === 0 ? 0.3 : 1} 
          cursor={pageIndex === 0 ? "default" : "pointer"} 
        />
      )}

      {/* 슬라이더 */}
      <HStack
        ref={containerRef}
        spacing={4}
        py={4}
        px={6}
        mx="30px"
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${pageIndex * (250 + 16) * visibleCount}px)`,
        }}
      >
        {data.map((img, index) => (
          <Image
            key={index}
            src={img.filename}
            alt={img.name}
            w="250px"
            h="150px"
            objectFit="cover"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.2)",
              zIndex: "100",
            }}
            onClick={() => handleModal(index)}
          />
        ))}
      </HStack>

      {/* 다음 버튼 */}
      <IconButton
        variant="ghost"
        onClick={moveToNext}
        color="white"
        aria-label={"next"}
        icon={<FaChevronRight />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        opacity={pageIndex === totalPages - 1 ? 0.3 : 1} 
        cursor={pageIndex === totalPages - 1 ? "default" : "pointer"} 
      />

      {/* 모달 */}
      {selectedProject && (
        <ProjectModal
          isOpen={isOpen}
          onClose={handleClose}
          data={selectedProject}
        />
      )}
      {selectedWork && (
        <WorkModal
          isOpen={isOpen}
          onClose={handleClose}
          data={selectedWork}
        />
      )}
    </Box>
    </>
  );
};

export default ArrayImage;
