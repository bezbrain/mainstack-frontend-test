import { createSlice } from "@reduxjs/toolkit";
import wallet from "../action/wallet.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";

interface WalletProps {
  wallet: {
    balance: number;
    total_payout: number;
    total_revenue: number;
    pending_payout: number;
    ledger_balance: number;
  };
  isLoading: boolean;
}

const initialState: WalletProps = {
  wallet: {
    balance: 0,
    total_payout: 0,
    total_revenue: 0,
    pending_payout: 0,
    ledger_balance: 0,
  },
  isLoading: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(wallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(wallet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.wallet = payload;
      })
      .addCase(wallet.rejected, (state, { payload }: any) => {
        state.isLoading = true;
        serverMessage(payload, toast);
      });
  },
});

export default walletSlice.reducer;
