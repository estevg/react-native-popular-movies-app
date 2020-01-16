import * as Font from 'expo-font';

function cacheFonts(fonts) {
	return fonts.map((font) => Font.loadAsync(font));
}

export { cacheFonts };
