import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {PDFViewer} from '@react-pdf/renderer';
import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function Bookmarks() {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#FFFFFF'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const Bookmark = () => (
        <PDFViewer className={""} width={1280}>
            <Document>
                <Page size={"A4"} style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            Section #1
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text>
                            Section #2
                        </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )

    return (
        <>
            <div className={"container flex justify-center mx-auto w-full h-96"}>
                <Bookmark/>
            </div>
        </>
    )
}