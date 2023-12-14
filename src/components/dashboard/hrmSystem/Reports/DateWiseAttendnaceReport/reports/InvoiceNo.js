import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 9,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });


  const InvoiceNo = () => (
        <View style={{fontSize: '10px'}}>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Invoice No:</Text>
                <Text style={styles.invoiceDate}>201906-28</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date From: </Text>
                <Text style={styles.invoiceDate}>2019-09-12</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date To: </Text>
                <Text style={styles.invoiceDate}>2019-10-12</Text>
            </View >
        </View>
  );
  
  export default InvoiceNo