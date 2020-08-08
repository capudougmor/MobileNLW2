import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

const GiveClasses: React.FC = () => {

  
  return (
    <View style={styles.container} >
      <View style={styles.profile} >
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/60409911?s=460&u=8fdd6fe687515b06f34e33f6a4811e82d1f31712&v=4' }} 
        />
        <View style={styles.ProfileInfo} >
          <Text style={styles.name} >Douglas Mendes</Text>
          <Text style={styles.subject} >Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio} >
      Engenheiro civil formado na Universidade de Uberaba. 
      {'\b'}{'\b'}
      Amante dos estudos, tecnologia e esporte. Busco o aprendizado e aperfeiçoamento constante.
      </Text>

      <View style={styles.footer} >
        <Text style={styles.price} >
          Preço/Hora {'   '}
          <Text style={styles.priceValue} >R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer} >
          <RectButton style={[styles.favoriteButton, styles.favorited]} >
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton} >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText} >Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default GiveClasses;