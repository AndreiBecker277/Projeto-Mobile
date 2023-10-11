import { SectionList, StyleSheet, Text } from "react-native";

type ListaSectionProps = {
    array: {
        title: String,
        data: { key: number; descricao: String }[]
    }[]
}

const ListaSection = (props: ListaSectionProps) => {

    return <SectionList
        sections={props.array}
        renderItem={({ item }) =>
            <Text style={styles.item}>
                {item.descricao}
            </Text>}
        renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>
                {section.title}
            </Text>
        )}
        keyExtractor={item => `basicListEntry- ${item}`}
    />
}
export default ListaSection;

const styles = StyleSheet.create({

    item: {

        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: `bold`,
        backgroundColor: `rgba(247,247,247,1.0)`,
    },
    sectionHeader: {

    }
});