import { Image, StyleSheet } from "react-native";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
	const imageSource = selectedImage
		? { uri: selectedImage }
		: placeholderImageSource;

	return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 400,
		borderRadius: 18,
	},
});
