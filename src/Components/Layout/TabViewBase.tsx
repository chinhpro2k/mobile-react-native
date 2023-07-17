/* eslint-disable react/require-default-props */
import React, { useState, ReactNode } from 'react'
import { ViewStyle } from 'react-native'
import {
  TabView,
  TabBar,
  Route,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view'
import BoxBase from './Box'

type Scene<T extends Route> = {
  route: T
}

type Props<T extends Route> = {
  initialIndex?: number
  routes: T[]
  swipeEnabled?: boolean
  handleIndexChange?: (ind: number) => void
  renderTabBar?: (
    props: SceneRendererProps & {
      navigationState: NavigationState<T>
    },
  ) => ReactNode
  renderScene: (
    props: SceneRendererProps & {
      route: T
    },
  ) => React.ReactNode
  renderLabel?: (
    scene: Scene<T> & {
      focused: boolean
      color: string
    },
  ) => React.ReactNode
  lazy?: boolean
  lazyPreloadDistance?: number
  tabBarStyle?: ViewStyle
  indicatorStyle?: ViewStyle
}

function TabViewBase<T extends Route>(props: Props<T>): JSX.Element {
  const {
    initialIndex,
    routes,
    swipeEnabled,
    handleIndexChange,
    renderScene,
    renderLabel,
    lazy,
    lazyPreloadDistance,
    tabBarStyle,
    indicatorStyle,
  } = props
  const [index, setIndex] = useState(initialIndex || 0)

  const onIndexChange = (ind: number) => {
    setIndex(ind)
    handleIndexChange?.(ind)
  }

  const renderTabBar = (
    tabbarProps: SceneRendererProps & {
      navigationState: NavigationState<T>
    },
  ) => (
    <TabBar
      {...tabbarProps}
      style={tabBarStyle}
      indicatorStyle={indicatorStyle}
      renderLabel={renderLabel}
    />
  )

  return (
    <BoxBase flex={1}>
      <TabView
        navigationState={{ index, routes }}
        swipeEnabled={swipeEnabled}
        onIndexChange={onIndexChange}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        lazyPreloadDistance={lazyPreloadDistance}
        lazy={lazy}
      />
    </BoxBase>
  )
}

export default TabViewBase
