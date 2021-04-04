import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leo Schlanger</Text>
          <Text color="gray.300" fontSize="small">leoschlanger@email.com</Text>
        </Box>
      )}
      <Avatar 
        src="https://avatars.githubusercontent.com/u/37229572?s=48&v=4" 
        size="md" 
        name="Leo Schlanger" 
      />
    </Flex>
  );
}