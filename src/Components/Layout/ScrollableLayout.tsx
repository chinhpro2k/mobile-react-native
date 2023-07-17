import React, { FunctionComponent } from 'react'
import { ScrollView, IScrollViewProps } from 'native-base'

const ScrollableLayout: FunctionComponent<IScrollViewProps> = (
  props: IScrollViewProps,
) => {
  const { children, ...otherProps } = props
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      {...otherProps}
    >
      {Array.isArray(children) ? [...children] : children}
    </ScrollView>
  )
}

export default ScrollableLayout
