import { ScrollView, View, Text } from 'react-native'
import QuotesComponent from '../../common/QuotesComponent'
import React from 'react'  

export default function QuotesLiked()  {
  return (
    <View>
      <ScrollView>
        <QuotesComponent />
        <QuotesComponent />
        <QuotesComponent />
      </ScrollView>
    </View>
  )
};

 