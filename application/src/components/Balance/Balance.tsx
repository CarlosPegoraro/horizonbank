import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Balence() {
 return (
   <View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.item}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balence}>100,00</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.item}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balence}>300,00</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 100
    },
    itemTitle: {

})