import { HStack, Heading, Image, Text, VStack, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { ChevronRight } from "lucide-react-native"

type Props = TouchableOpacityProps

export function ExerciseCard({ ...rest }: Props) {
  return <TouchableOpacity>
    <HStack 
        bg="$gray500" 
        alignItems="center" 
        p="$2" 
        rounded="$md" 
        mb="$3"
      >
      <Image 
              source={{ 
                      uri: 'https://mixbrasilfit.com.br/wp-content/uploads/2021/02/home-5030361_1280.jpg' }} 
                      alt="Imagem do exercício" 
                      w="$16" 
                      h="$16"
                      rounded="$md"
                      mr="$4"
                      resizeMode="cover"
       />

       <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">Puxada Frontal</Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}> 3 séries x 12 rep </Text>
       </VStack>

       <Icon as={ChevronRight} color="$gray300"  />
    </HStack>
  </TouchableOpacity>;
}