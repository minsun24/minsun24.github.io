import { 
    Box, Flex, Text, Input, Textarea, Button, Checkbox, Avatar, HStack, VStack, Divider, IconButton 
} from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios'; 
 
interface GuestbookEntry {
    id: number;
    name: string;
    emoji: string;
    isGuest: boolean;
    message: string;
    date: string;
}


// 🐰 랜덤 이모지 목록
const avatarEmojis = ["🐰", "🦊", "🐼", "🐶", "🐱", "🐵", "🐸", "🐯", "🐻", "🦄"];

// 🎨 랜덤 배경색 목록
const avatarColors = ["#FFA8D3", "#FFF390", "#A0E7E5", "#B39CD0", "#FFB6C1", "#F5A623", "#A4C639"];

const getRandomAvatar = () => {
    return {
        emoji: avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)],
        bgColor: avatarColors[Math.floor(Math.random() * avatarColors.length)]
    };
};
const BASE_URL = process.env.REACT_APP_BASE_URL ;
const API_URL = `${BASE_URL}/api/guestbook/`;

const GuestBook = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]); 

    // 서버에서 방명록 데이터 가져오기
    useEffect(() => {
        axios.get(API_URL)
            .then((res) => setGuestbookEntries(res.data))
            .catch((err) => console.error("Error fetching guestbook:", err));
    }, []);


    console.log("API BASE URL:", process.env.REACT_APP_BASE_URL);


    useEffect(() => {
        if (isAnonymous) {
            setName("익명");
        } else {
            setName("");
        }
    }, [isAnonymous]);

    const handleAddEntry = () => {
        if (!message.trim()) return; // 빈 메시지 방지

        const newEntry = {
            id: guestbookEntries.length + 1,
            name: isAnonymous ? "익명" : name || "익명",
            emoji: getRandomAvatar().emoji, // 랜덤 아바타 생성
            isGuest: isAnonymous,
            message,
            date: "Today"
        };

        // setGuestbookEntries([newEntry, ...guestbookEntries]);
        // setMessage("");
        
        axios.post<GuestbookEntry>(API_URL, newEntry)
        .then((res) => {
            setGuestbookEntries((prev) => [res.data, ... prev]);  // 새 데이터 추가
            setMessage(""); 
        })
        .catch((err) => console.error("Error posting guestbook:", err));
    };

    return (
        <Flex w="100vw" bgColor="#141414" h="100%" minH="100vh" direction="column">
            <Header />
            <Box mt="70px" p={5} color="white" maxW="80%" mx="auto" w="100%">
                {/* 방명록 제목 */}
                <Text fontSize="2xl" fontWeight="bold" mb="30px">
                    방명록 🍀
                </Text>

                {/* 입력 폼 */}
                <Box bg="#1b1b1e" p={4} borderRadius="10px" mt={4}>
                    <HStack spacing={3}>
                        <Input 
                            w="200px"
                            placeholder="이름" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            bg="rgba(53,53,53,0.7)"
                            border="none"
                            color="white"
                        />
                        <Checkbox 
                            isChecked={isAnonymous} 
                            colorScheme="gray"
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                        >
                            익명
                        </Checkbox>
                    </HStack>
                    <Textarea 
                        placeholder="방명록을 남겨주세요!" 
                        mt={3} 
                        bg="rgba(53,53,53,0.7)"
                        border="none"
                        color="white"
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <HStack justifyContent={"flex-end"}>
                        <Button 
                            colorScheme="red" 
                            mt={3} 
                            w="fit-content" 
                            px={5} 
                            fontSize="15px" 
                            size="sm"
                            onClick={handleAddEntry}
                        >
                            등록
                        </Button>
                    </HStack>
                </Box>

                {/* 방명록 리스트 */}
                <VStack align="stretch" mt={6} spacing={6}>
                    {guestbookEntries.map((entry) => (
                        <Box key={entry.id} py={5} px={6} bg="blackAlpha.700" borderRadius="10px">
                            <HStack justify="space-between">
                                {/* 유저 정보 */}
                                <HStack gap={5}>
                                    {/* 랜덤 아바타 */}
                                    <Box 
                                        w="60px" h="60px" borderRadius="full" 
                                        // bg={entry.bgColor} 
                                        bg="gray.600"
                                        display="flex" 
                                        alignItems="center" justifyContent="center"
                                    >
                                        <Text fontSize="35px">{entry.emoji}</Text>
                                    </Box>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="bold">{entry.name}</Text>
                                        <Text fontSize="xs" color="gray.400">
                                            {entry.isGuest ? "#guest" : ""} {entry.date}
                                        </Text>
                                    </VStack>
                                </HStack>
                                {/* 삭제 버튼 */}
                                <IconButton
                                    icon={<FaTrash />}
                                    aria-label="삭제"
                                    colorScheme="gray"
                                    variant="ghost"
                                />
                            </HStack>
                            <Divider my={3} />
                            {/* 메시지 내용 */}
                            <Text fontSize="sm">{entry.message}</Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Flex>
    );
};

export default GuestBook;
