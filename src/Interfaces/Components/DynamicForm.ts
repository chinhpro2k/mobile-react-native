export interface ELementInput {
  min?: number
  max?: number
  width?: number
  minDate?: Date
  maxDate?: Date
  descriptionText?: string
  disabled?: boolean
  numColumns?: number
  note?: string
  level?: number
  fileType: string[]
  isRequired: boolean
  label: string
  type: string
  _id: string
  dataSource: ELementInput[]
  relatedElement: ELementInput[]
  value?: any
  errorContent?: string
  position?: ['auto', 'top', 'bottom']
  onGoTo?: () => void
  chuThich?: string
  tableHead?: any
  tableData?: any
  widthArr?: any
  valueField?: any
  labelField?: any
}
