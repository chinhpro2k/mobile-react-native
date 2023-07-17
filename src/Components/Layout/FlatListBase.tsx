/* eslint-disable react/require-default-props */
import React, { useState, useRef } from 'react'
import { FlatList } from 'native-base'

// components
import TextBase from '../Text'

// i18n
import { translate } from '@/i18n'
import { HEIGHT } from '@/Config'
import LoadingComponent from '../LoadingComponent'

type ListRenderItemInfo<ItemT> = {
  item: ItemT

  index: number

  separators: {
    highlight: () => void
    unhighlight: () => void
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void
  }
}

type ListRenderItem<ItemT> = (
  info: ListRenderItemInfo<ItemT>,
) => React.ReactElement | null

type Props<ItemT> = {
  data: any[]
  keyExtractor: (item: any, index: number) => string
  onRefresh: (funcCallBack: (value: boolean) => void) => void
  onLoadMore?: (funcCallBack: (value: boolean) => void) => void
  noLoadMore?: boolean
  textEmpty?: string
  renderItem: ListRenderItem<ItemT> | null | undefined
}

function FlatListBase<T>(props: Props<T>) {
  const {
    data = [],
    keyExtractor = (_item, index) => String(index),
    onRefresh,
    onLoadMore,
    noLoadMore = false,
    textEmpty,
    renderItem,
  } = props
  const [refreshing, setRefreshing] = useState(true)
  const [loadMore, setLoadMore] = useState(false)
  const page = useRef(1)
  const maxData = useRef(false)

  const setMaxData = (value: boolean) => {
    maxData.current = value
  }

  const finishRefresh = (value: boolean) => {
    setMaxData(value)
    setRefreshing(false)
  }

  const handleRefresh = () => {
    page.current = 1
    setRefreshing(true)
    onRefresh?.(finishRefresh)
  }

  const finishLoadMore = (value: boolean) => {
    setMaxData(value)
    setLoadMore(false)
  }

  const handleLoadMore = () => {
    if (!maxData.current) {
      page.current += 1
      setLoadMore(true)
      onLoadMore?.(finishLoadMore)
    }
  }

  return (
    <FlatList
      data={data}
      extraData={data}
      refreshing={refreshing}
      onEndReachedThreshold={0.01}
      keyExtractor={keyExtractor}
      onRefresh={handleRefresh}
      onEndReached={handleLoadMore}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={
        <TextBase
          textContent={textEmpty || translate('NO_DATA')}
          mt={HEIGHT(30)}
        />
      }
      ListFooterComponent={
        <LoadingComponent
          isLoading={!noLoadMore && loadMore}
          height={HEIGHT(30)}
        />
      }
    />
  )
}

export default FlatListBase
