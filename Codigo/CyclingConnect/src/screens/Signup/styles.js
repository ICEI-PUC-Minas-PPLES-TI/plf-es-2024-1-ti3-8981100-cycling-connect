import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const KeyboardWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.primary};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Background = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Content = styled.View`
  padding: 60px 30px 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.background.primary};
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  margin-bottom: 30px;
  padding-right: 40px;
`;

export const Error = styled.Text`
  margin-top: 2px;
  font-family: ${fonts.primaryRegular};
  font-size: ${fontSizes.smaller};
  color: ${colors.error};
`;