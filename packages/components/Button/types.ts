import type { Component } from "vue"

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"

export type NativeType = "button" | "reset" | "submit"

export type ButtonSize = "small" | "default" | "large"

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  nativeType?: NativeType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: string
  circle?: boolean
  plain?: boolean
  round?: boolean
}
