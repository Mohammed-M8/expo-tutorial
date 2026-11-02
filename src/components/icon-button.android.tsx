import { Column, Host, Icon, TextButton } from "@expo/ui/jetpack-compose";
import { AndroidSymbol, SFSymbol } from "expo-symbols";
import { ImageSourcePropType } from "react-native";

type Props = {
    icon: {
        android: ImageSourcePropType;
        ios: SFSymbol;
        web: AndroidSymbol
    };
    label: string;
    onPress: () => void
}

export default function IconButton({ icon, label, onPress }: Props) {
    return (
        <Host matchContents>
            <TextButton onClick={onPress} colors={{ contentColor: "#fff" }}>
                <Column horizontalAlignment="center" verticalArrangement={{ spacedBy: 12 }}>
                    <Icon source={icon.android} size={24} tint="#fff" />
                </Column>
            </TextButton>
        </Host>
    )
}