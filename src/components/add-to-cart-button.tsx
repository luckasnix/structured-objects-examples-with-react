import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const AddToCartButton = () => (
  <Button
    type="submit"
    variant="contained"
    color="success"
    startIcon={<AddShoppingCartIcon />}
  >
    Add to cart
  </Button>
);
