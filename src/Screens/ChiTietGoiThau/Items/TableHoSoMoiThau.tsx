import { HEIGHT, WIDTH } from '@/Config'
import { Divider, Pressable, Text, View, FlatList } from 'native-base'
import React, { useEffect } from 'react'
// import { View } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
// config
import R from '@/Assets/R'
import { navigate } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
const TableHoSoMoiThau = (props: any) => {
  const { data, id } = props

  const goTo = (item: any) => {
    const url = `https://muasamcong.mpi.gov.vn/egp/contractorfe/viewer?formCode=${
      item?.code
    }&id=${id}&fileName=${item?.name?.replaceAll(' ', '_')}`

    navigate(ScreenName.WebViewScreen, { title: item?.name, url: url })
  }
  useEffect(() => {
    formatData(data)
  }, [])

  const formatData = (data: any) => {
    const filterLv0 = data
      ?.filter((item: any) => {
        return item.lev == 0
      })
      ?.sort((a: any, b: any) => {
        return a.orderIndex - b.orderIndex
      })

    let array: any[] = []
    const mucData = filterLv0?.map((item: any, index: any) => {
      const mucCon = data
        .filter((itemMuc: any) => {
          return itemMuc.pcode === item.code
        })
        ?.sort((a: any, b: any) => {
          return a.orderIndex - b.orderIndex
        })
        ?.sort((a: any, b: any) => {
          return a.orderIndex - b.orderIndex
        })
      const mucConIndex = mucCon?.map((itemMuc: any) => {
        return {
          ...itemMuc,
          orderIndex: `${item?.orderIndex + 1}.${itemMuc?.orderIndex + 1}`,
        }
      })

      array.push(
        ...[{ ...item, orderIndex: item?.orderIndex + 1 }, ...mucConIndex],
      )
    })

    return array
  }
  return (
    <View>
      <FlatList
        data={[
          { title: 'STT', name: 'Tên phần/Tên chương' },
          ...formatData(data),
        ]}
        extraData={[
          { title: 'STT', name: 'Tên phần/Tên chương' },
          ...(data?.bidaInvChapterConfList ?? []),
        ]}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: HEIGHT(30) }}
        marginTop={HEIGHT(8)}
        renderItem={({ item, index }) => {
          if (item?.lev >= 2) {
            return null
          }
          return (
            <>
              <View
                flexDirection={'row'}
                alignSelf={'center'}
                w={WIDTH(343)}
                paddingY={WIDTH(8)}
                backgroundColor={
                  index === 0
                    ? R.colors.backgroundColorMesseage
                    : R.colors.white100
                }
              >
                <Text width={WIDTH(60)} marginLeft={WIDTH(8)}>
                  {index == 0 ? 'STT' : item?.orderIndex}
                </Text>
                <Pressable onPress={() => goTo(item)}>
                  <Text
                    color={
                      item?.lev === 0 ? R.colors.orangeA700 : R.colors.gray4F
                    }
                    fontWeight={item?.lev === 0 ? 'bold' : 'light'}
                    maxWidth={WIDTH(280)}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              </View>
              <Divider alignSelf={'center'} w={WIDTH(343)} />
            </>
          )
        }}
      />
    </View>
  )
}

export default TableHoSoMoiThau
