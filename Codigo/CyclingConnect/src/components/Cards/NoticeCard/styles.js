import styled from 'styled-components/native';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

const Card = styled.TouchableOpacity`
  background-color: #3c3c3c;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.Text`
  font-family: ${fonts.secondary.secondaryMedium};
  font-size: ${fontSizes.large};
  color: ${colors.redPalette.primary};
`;

const Description = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
  margin-top: 5px;
`;

const DateText = styled.Text`
  font-family: ${fonts.primary.primaryBold};
  font-size: ${fontSizes.medium};
  color: ${colors.lightPalette.text};
  margin-top: 10px;
`;