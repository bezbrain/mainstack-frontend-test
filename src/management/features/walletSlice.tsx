import { createSlice } from "@reduxjs/toolkit";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";
import walletData from "../action/wallet.action";

interface WalletProps {
  isWalletLoading: boolean;
  wallet: {
    balance: number;
    total_payout: number;
    total_revenue: number;
    pending_payout: number;
    ledger_balance: number;
  };
}

const initialState: WalletProps = {
  isWalletLoading: false,
  wallet: {
    balance: 0,
    total_payout: 0,
    total_revenue: 0,
    pending_payout: 0,
    ledger_balance: 0,
  },
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(walletData.pending, (state) => {
        state.isWalletLoading = true;
      })
      .addCase(walletData.fulfilled, (state, { payload }) => {
        state.isWalletLoading = false;
        state.wallet = payload;
      })
      .addCase(walletData.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isWalletLoading = true;
      });
  },
});

export default walletSlice.reducer;
