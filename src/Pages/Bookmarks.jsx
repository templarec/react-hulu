import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import {PDFViewer} from '@react-pdf/renderer';
import {useOutletContext, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../Contexts/ContextProvider.jsx";

export function Bookmarks() {
    const {movies} = useContext(Context);
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#FFFFFF'
        },
        section: {
            padding: 20,
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        title: {
            fontSize: 25,
            paddingLeft: 10,
        }
    });

    const Bookmark = () => (
        <PDFViewer className={""} width={1280} height={1024}>
            <Document>
                <Page size={"A4"} style={styles.page}>
                    <Image style={styles.image} src={"/logo.png"}>

                    </Image>
                    <Text style={styles.title}>
                        Your favorites:
                    </Text>
                    {movies && movies.map(el => (
                        <View key={el.id} style={styles.section}>
                            <Text>
                                {el.original_title}
                            </Text>
                        </View>
                    ))}
                </Page>
            </Document>
        </PDFViewer>
    )

    return (
        <>
            <div className={"container pt-[120px] flex justify-center mx-auto w-full"}>
                <Bookmark/>
            </div>
        </>
    )
}