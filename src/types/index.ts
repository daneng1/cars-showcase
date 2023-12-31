import { MouseEventHandler } from "react"

export interface CarProps {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface CarCardProps {
  car: CarProps
}

export interface ButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit"
  textStyles?: string
  rightIcon?: string
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacture: string) => void
}

export interface CarDetailsProps {
  isModalOpen: boolean
  car: CarProps
  closeModal: () => void
}
