/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import styles from './styles'

import { goBack, navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'

import ScreenName from '@/Navigators/screenNames'
import R from '@/Assets/R'
import {
  HEIGHT,
  WIDTH,
  formatVND,
  getFontSize,
  numToVND,
  popupOk,
} from '@/Config'
import { Box, Divider, Text, Link, Pressable } from 'native-base'
import HeaderBase from '@/Components/Header/HeaderBase'
import { TabView } from 'react-native-tab-view'
import TableHoSoMoiThau from './Items/TableHoSoMoiThau'
import {
  chiTietGoiThau,
  chiTietVersion,
  danhSachVersion,
  duongDanGoiThau,
} from '@/Services/modules/users'
import moment from 'moment'
import LoadingComponent from '@/Components/LoadingComponent'
import { LoaiHopDong, bidForms, dmPtlcnt } from './enum'
export enum LinhVuc {
  OTHER = 'Khác',
  HH = 'Hàng hoá',
  XL = 'Xây lắp',
  PTV = 'Phi tư vấn',
  TV = 'Tư vấn',
  HON_HOP = 'Hỗn hợp',
}
export function getNameCatByCodeCat(code: any, listCat: any) {
  if (!listCat) {
    return code
  }
  const temp = listCat.filter((el: any) => el.code == code).pop()
  return temp ? temp.name : code
}
export function getNameOfPeriod(code: string) {
  if (code == 'D') {
    return 'ngày'
  }
  if (code == 'T') {
    return 'tháng'
  }
  if (code == 'M') {
    return 'tháng'
  }
  if (code == 'Q') {
    return 'quý'
  }
  if (code == 'N') {
    return 'năm'
  }
  if (code == 'Y') {
    return 'năm'
  }
  return ''
}
const formatDataThongTinChung = (data: any, dataChiTiet?: any, cat: string) => {
  const dataVersion = dataChiTiet
  if (cat == 'Thông báo mời thầu/Tên gói thầu') {
    return [
      {
        title: 'Thông tin cơ bản',
        exTraData: [
          {
            title: 'Mã TBMT',
            value: dataVersion?.bidCancelingResponse?.notifyNo,
          },
          {
            title: 'Ngày đăng tải',
            value: dataVersion?.bidNoContractorResponse?.bidNotification
              ?.publicDate
              ? moment(
                  dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.publicDate,
                ).format('DD/MM/YYYY HH:mm')
              : '',
          },
          {
            title: 'Phiên bản thay đổi',
            value: data?.listVersion,
            type: true,
          },
        ],
      },
      {
        title: 'Thông tin chung của KHLCNT',
        exTraData: [
          {
            title: 'Mã KHLCNT',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification?.planNo,
          },
          {
            title: 'Phân loại KHLCNT',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification?.planType, //chua biet
          },
          {
            title: 'Tên dự án',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.projectName,
          },
        ],
      },
      {
        title: 'Thông tin gói thầu',
        exTraData: [
          {
            title: 'Tên gói thầu',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification?.bidName,
          },

          {
            title: 'Bên mời thầu',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.procuringEntityName,
          },
          {
            title: 'Chủ đầu tư',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.investorName,
          },
          {
            title: 'Nguồn vốn',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.capitalDetail,
          },
          {
            title: 'Lĩnh vực',
            value:
              LinhVuc?.[
                dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.investField
              ],
          },
          {
            title: 'Hình thức lựa chọn nhà thầu',
            value: getNameCatByCodeCat(
              dataVersion?.bidNoContractorResponse?.bidNotification?.bidForm,
              bidForms,
            ), //chua biet
          },
          {
            title: 'Loại hợp đồng',
            value: getNameCatByCodeCat(
              dataVersion?.bidpPlanDetail?.ctype
                ? dataVersion?.bidpPlanDetail?.ctype
                : dataVersion?.bidNoContractorResponse?.bidNotification?.ctype,
              LoaiHopDong,
            ), //chua biet
          },
          {
            title: 'Trong nước/ Quốc tế',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.isDomestic === 1
                ? 'Trong nước'
                : 'Quốc tế', //chua biet
          },
          {
            title: 'Phương thức lựa chọn nhà thầu',
            value: getNameCatByCodeCat(
              dataVersion?.bidNoContractorResponse?.bidNotification?.bidMode,
              dmPtlcnt,
            ), //chua biet
          },
          {
            title: 'Thời gian thực hiện hợp đồng',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.contractPeriod +
              ' ' +
              getNameOfPeriod(
                dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.contractPeriodUnit,
              ),
          },
        ],
      },
      {
        title: 'Cách thức dự thầu',
        exTraData: [
          {
            title: 'Hình thức dự thầu',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.isInternet === 1
                ? 'Qua mạng'
                : 'Không qua mạng',
          },
          {
            title: `Địa điểm phát hành ${
              dataVersion?.bidNoContractorResponse?.bidNotification
                .isInternet == 0
                ? 'HSMT'
                : 'e-HSMT'
            }`,
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.issueLocation,
          },
          {
            title: `Chi phí nộp ${
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.isInternet == 0
                ? 'Giá bán HSMT'
                : 'Chi phí nộp e-HSDT'
            }`,
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.isInternet == 1
                ? dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.bidForm == 'DTRR' ||
                  dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.bidForm == 'DTHC' ||
                  dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.bidForm == 'MSTT'
                  ? ' 330,000 VND '
                  : ' 220,000 VND '
                : dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.feeValue
                ? `${
                    dataVersion?.bidNoContractorResponse?.bidNotification
                      ?.feeValue ?? 0
                  } VND`
                : 'Miễn phí',
          },
          {
            title: 'Địa điểm nhận e-HSDT',
            value:
              dataChiTiet?.bidNoContractorResponse?.bidNotification
                ?.receiveLocation,
          },
          {
            title: `Địa điểm nhận ${
              dataVersion?.bidNoContractorResponse?.bidNotification
                .isInternet == 0
                ? 'HSMT'
                : 'e-HSMT'
            }`,
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.receiveLocation,
          },
          {
            title: 'Địa điểm thực hiện gói thầu',
            value: dataChiTiet?.bidpBidLocationList?.map((item: any) => {
              return (
                item?.wardName ??
                '__' + ',' + item?.districtName ??
                '__' + ',' + item?.provName ??
                '__' + '\n'
              )
            }),
          },
        ],
      },
      {
        title: 'Thông tin dự thầu',
        exTraData: [
          {
            title: 'Thời điểm đóng thầu',
            value: dataVersion?.bidNoContractorResponse?.bidNotification
              ?.bidCloseDate
              ? moment(
                  dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.bidCloseDate,
                ).format('DD/MM/YYYY HH:mm')
              : 'Không có dữ liệu',
          },
          {
            title: 'Thời điểm mở thầu',
            value: dataVersion?.bidNoContractorResponse?.bidNotification
              ?.bidOpenDate
              ? moment(
                  dataVersion?.bidNoContractorResponse?.bidNotification
                    ?.bidOpenDate,
                ).format('DD/MM/YYYY HH:mm')
              : 'Không có dữ liệu',
          },
          {
            title: 'Địa điểm mở thầu',
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.bidOpenLocation,
            link: dataVersion?.bidNoContractorResponse?.bidNotification
              ?.bidOpenLocation,
          },
          {
            title: `Địa điểm nhận ${
              dataVersion?.bidNoContractorResponse?.bidNotification.bidForm ===
              'CHCTRG'
                ? 'Hiệu lực báo giá'
                : 'Hiệu lực hồ sơ dự thầu'
            }`,
            value:
              dataVersion?.bidNoContractorResponse?.bidNotification
                ?.bidValidityPeriod +
              ' ' +
              getNameOfPeriod(
                dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.bidValidityPeriodUnit,
              ),
          },

          {
            title: 'Số tiền đảm bảo dự thầu',
            value: formatVND(
              Number(
                dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.guaranteeValue
                  ? dataVersion?.bidNoContractorResponse?.bidNotification
                      ?.guaranteeValue
                  : dataVersion?.bidNoContractorResponse?.bidNotification
                      ?.bidGuaranteeValue,
              ),
            ),
          },
          {
            title: 'Hình thức đảm bảo dự thầu',
            value: dataVersion?.bidNoContractorResponse?.bidNotification
              ?.guaranteeValue
              ? dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.guaranteeForm
              : dataVersion?.bidNoContractorResponse?.bidNotification
                  ?.bidGuaranteeForm,
          },
        ],
      },
      {
        title: 'Thông tin quyết định phê đuyệt',
        exTraData: [
          {
            title: 'Số quyết định phê đuyệt',
            value: dataVersion?.bidInvContractorOfflineDTO?.decisionNo,
          },
          {
            title: 'Ngày phê duyệt',
            value: dataVersion?.bidInvContractorOfflineDTO?.decisionDate
              ? moment(
                  dataVersion?.bidInvContractorOfflineDTO?.decisionDate,
                ).format('DD/MM/YYYY')
              : 'Không có',
          },
          {
            title: 'Cơ quan ban hành quyết định',
            value: dataVersion?.bidInvContractorOfflineDTO?.decisionAgency,
          },
          {
            title: 'Quyết định phê đuyệt',
            value:
              dataChiTiet?.bidInvContractorOfflineDTO?.decisionFileName ??
              dataChiTiet?.bidInvContractorOfflineDTO?.decisionFileId,
          },
        ],
      },
    ]
  } else {
    return [
      {
        title: 'Thông tin cơ bản',
        exTraData: [
          {
            title: 'Mã KHLCNT',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.planNo,
          },
          {
            title: 'Tên KHLCNT',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.name,
          },
          {
            title: 'Phiên bản thay đổi',
            value: data?.listVersion,
            type: true,
          },
          {
            title: 'Trạng thái đăng tải',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.status,
          },
          {
            title: 'Tên dự toán mua sắm',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.pname,
          },
          {
            title: 'Bên mời thầu',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.investorName,
          },
          {
            title: 'Số lượng gói thầu',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.bidPack,
          },
        ],
      },
      {
        title: 'Thông tin dự toán mua sắm',
        exTraData: [
          {
            title: 'Dự toán mua sắm',
            value: formatVND(
              dataChiTiet?.bidPoBidpPlanProjectDetailView?.investTotal ?? 0,
            ),
          },
          {
            title: 'Số tiền bằng chữ',
            value: numToVND().doc(
              dataChiTiet?.bidPoBidpPlanProjectDetailView?.investTotal ?? 0,
            ), //chua biet
          },
        ],
      },
      {
        title: 'Thông tin quyết định phê duyệt',
        exTraData: [
          {
            title: 'Số quyết định phê duyệt',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.decisionNo,
          },
          {
            title: 'Ngày phê duyệt',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.decisionDate
              ? moment(
                  dataChiTiet?.bidPoBidpPlanProjectDetailView?.decisionDate,
                ).format('DD/MM/YYYY')
              : '', //chua biet
          },
          {
            title: 'Cơ quan ban hành quyết định',
            value: dataChiTiet?.bidPoBidpPlanProjectDetailView?.decisionAgency, //chua biet
          },
          {
            title: 'Quyết định phê duyệt',
            value:
              dataChiTiet?.bidPoBidpPlanProjectDetailView?.decisionFileName, //chua biet
          },
        ],
      },
    ]
  }
}

const ChiTietGoiThau = (props: any) => {
  const duLieuGoc = props?.route?.params?.data
  const cat = props?.route?.params?.cat

  const id = props?.route?.params?.id

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [currentVersion, setcurrentVersion] = useState<any>()
  const [chiTietCurrentVersion, setchiTietCurrentVersion] = useState()
  const [danhSachMucHoSo, setdanhSachMucHoSo] = useState()
  const [url, setUrl] = useState(undefined)
  useEffect(() => {
    getData()
  }, [])
  const getData = async (version?: any) => {
    setLoading(true)
    try {
      const resListVersion = await danhSachVersion(duLieuGoc?._id ?? id, cat)

      const listVersionCurrent = resListVersion?.data?.data?.versionList ?? []
      setcurrentVersion(version ?? listVersionCurrent?.[0])
      const idVer = version ?? listVersionCurrent?.[0]

      const res = await chiTietGoiThau(idVer?.id, cat)

      const urlGoiThau = await duongDanGoiThau(duLieuGoc?._id ?? id)

      setUrl(urlGoiThau?.data)

      const resChiTiet = await chiTietVersion(
        version?.id ?? listVersionCurrent?.[0]?.id,
        cat,
      )

      setdanhSachMucHoSo(res?.data?.bidaInvChapterConfList)
      setchiTietCurrentVersion(resChiTiet?.data)
      if (res?.statusCode === 200) {
        setData(
          formatDataThongTinChung(
            {
              ...res?.data,
              listVersion: listVersionCurrent,
            },
            resChiTiet?.data,
            cat,
          ),
        )
      } else {
        setData(null)
        console.log('====> đã ở đây')
        popupOk(
          'Thông báo',
          res?.errorDescription ?? 'Đã có lỗi xảy ra',
          goBack,
        )
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Thông tin chung', icon: 'home' },
    { key: 'second', title: 'Hồ sơ mời thầu', icon: 'bells' },
  ])
  const layout = useWindowDimensions()
  const renderTabBar = (props: any) => {
    const dataTabView = props.navigationState.routes
    const indexNow = props.navigationState.index
    if (cat == 'Thông báo mời thầu/Tên gói thầu') {
      return (
        <View style={styles.viewContent}>
          <FlatList
            data={dataTabView}
            extraData={dataTabView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            renderItem={({ item, index }) => {
              const backgroundColor =
                indexNow === index ? R.colors.primaryColor : R.colors.white
              const color =
                indexNow === index ? R.colors.white : R.colors.primaryColor

              return (
                <TouchableOpacity
                  onPress={() => {
                    props?.jumpTo(item?.key)
                  }}
                  activeOpacity={0.6}
                  style={[styles.touchCirle, { backgroundColor }]}
                >
                  <Text style={[{ color }]}>{item?.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      )
    } else {
      return <></>
    }
  }
  const onChangeVersion = (item: any) => {
    setcurrentVersion(item)
    getData(item)
  }
  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case routes?.[0]?.key:
        return !loading ? (
          <FlatList
            data={data}
            extraData={data}
            showsVerticalScrollIndicator={false}
            // pagingEnabled={true}
            ListHeaderComponent={
              <>
                {url ? (
                  <Box
                    alignItems="center"
                    marginLeft={WIDTH(12)}
                    // marginTop={HEIGHT(8)}
                    // justifyContent={'center'}
                  >
                    <Link
                      href={url}
                      isExternal
                      _text={{
                        color: R.colors.primaryColor,
                        fontStyle: 'italic',
                      }}
                      padding={WIDTH(4)}
                      // borderWidth={'1'}
                      // width={WIDTH(100)}
                      // borderRadius={'sm'}
                      // borderColor={R.colors.primaryColor}
                    >
                      Đi đến website
                    </Link>
                  </Box>
                ) : null}
              </>
            }
            bounces={false}
            contentContainerStyle={styles.padding}
            renderItem={({ item }) => {
              return (
                <View style={styles.listItemContainer}>
                  <View style={styles.listContainer}>
                    <Text style={styles.title}>{item?.title}</Text>
                  </View>
                  <ListDataMuc
                    data={item?.exTraData}
                    onChangeVersion={onChangeVersion}
                    currentVersion={currentVersion}
                  />
                </View>
              )
            }}
          />
        ) : (
          <LoadingComponent size={'lg'} isLoading={loading} />
        )

      case routes?.[1]?.key:
        return (
          <TableHoSoMoiThau data={danhSachMucHoSo} id={currentVersion?.id} />
        )
      default:
        return <></>
    }
  }
  return (
    <View style={styles.container}>
      <HeaderBase title="Chi tiết gói thầu" />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        swipeEnabled={false}
        initialLayout={{ width: layout.width }}
      />
    </View>
  )
}

export default ChiTietGoiThau
const ListDataMuc = ({ data, onChangeVersion, currentVersion }: any) => {
  return (
    <FlatList
      data={data}
      extraData={data}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item?.title}</Text>
            {item?.type ? (
              <ListVersion
                data={item?.value}
                onChangeVersion={onChangeVersion}
                currentVersion={currentVersion}
              />
            ) : (
              <>
                {item?.link ? (
                  <Link
                    isExternal
                    _text={{
                      color: R.colors.primaryColor,
                      fontStyle: 'italic',
                    }}
                    style={styles.itemValue}
                    href={item?.link}
                  >
                    {item?.value}
                  </Link>
                ) : (
                  <Text selectable style={styles.itemValue}>
                    {item?.value}
                  </Text>
                )}
              </>
            )}
            <Divider style={styles.divider} />
          </View>
        )
      }}
    />
  )
}
const ListVersion = (props: any) => {
  const { data, onChangeVersion, currentVersion } = props
  return (
    <View style={styles.listVersion}>
      {data?.map((item: any) => {
        return (
          <TouchableOpacity
            disabled={
              item?.notifyVersion
                ? item?.notifyVersion === currentVersion?.notifyVersion
                : item?.planVersion === currentVersion?.planVersion
            }
            style={[
              styles.viewVersion,
              {
                backgroundColor: item?.notifyVersion
                  ? item?.notifyVersion === currentVersion?.notifyVersion
                    ? R.colors.primaryColor
                    : R.colors.grey300
                  : item?.planVersion === currentVersion?.planVersion
                  ? R.colors.primaryColor
                  : R.colors.grey300,
              },
            ]}
            onPress={() => {
              onChangeVersion(item)
            }}
          >
            <Text
              style={{
                color: item?.notifyVersion
                  ? item?.notifyVersion === currentVersion?.notifyVersion
                    ? R.colors.white
                    : R.colors.black0
                  : item?.planVersion === currentVersion?.planVersion
                  ? R.colors.white
                  : R.colors.black0,
              }}
            >
              {item?.notifyVersion ?? item?.planVersion}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
