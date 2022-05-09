import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MaskedInput from "react-input-mask";
import NumberFormat from "react-number-format";
import { StyledInput, Label } from "./styles";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ImCreditCard } from "react-icons/im";

function Input({
  icon,
  password,
  type,
  placeholder,
  label,
  mask,
  numeric,
  price,
  value,
  onChange,
  width,
  disabled,
  disableLabel,
  marginVertical,
  card,
  onFocus,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : numeric ? "tel" : type;

  return (
    <div>
      {!disableLabel && !icon && <Label>{label}:</Label>}
      <StyledInput
        icon={icon && true}
        width={width}
        marginVertical={marginVertical}
      >
        <div>{icon}</div>
        {numeric ? (
          <NumberFormat
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            prefix={price ? "R$ " : ""}
            thousandSeparator="."
            placeholder={placeholder}
            decimalSeparator=","
            decimalScale={price && 2}
            fixedDecimalScale={price}
            onFocus={onFocus}
          />
        ) : (
          <MaskedInput
            name={name}
            id={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="new-password"
            mask={mask}
            type={inputType}
            maskChar={""}
            onFocus={onFocus}
          />
        )}
        {password && (
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </IconButton>
        )}
        {card && <ImCreditCard size="19" color="#E7E7E7" />}
      </StyledInput>
    </div>
  );
}

export default Input;
