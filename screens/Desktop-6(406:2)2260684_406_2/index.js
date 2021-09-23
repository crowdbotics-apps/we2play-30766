import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73b9/c445/5ec3b5d57904db74dd8ac52467c44260"
        }}
        style={styles.ImageBackground_406_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42ba/a297/bf4d1639f8e1a32f7b0ef44dec784dc2"
        }}
        style={styles.ImageBackground_406_4}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(204, 204, 204, 1)" },
  View_2: { height: hp("139.89071038251367%") },
  ImageBackground_406_5: {
    width: wp("40.69444444444444%"),
    minWidth: wp("40.69444444444444%"),
    height: hp("245.62841530054644%"),
    minHeight: hp("245.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: hp("-119.39890710382515%"),
    resizeMode: "cover"
  },
  ImageBackground_406_4: {
    width: wp("40.69444444444444%"),
    minWidth: wp("40.69444444444444%"),
    height: hp("245.62841530054644%"),
    minHeight: hp("245.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("13.661202185792352%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
