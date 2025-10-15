import { useEffect } from "react";
import { getAccessToken, getRefreshToken } from "../shared/utils/tokenUtils";
import { useAppDispatch } from "../store/store";
import { setAuth, setInitialized } from "../store/userSlice";
import type { ReactNode } from "react";

export default function AuthProvider({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let ws: WebSocket | null = null;

    (async () => {
      try {
        const access = getAccessToken();
        const refresh = getRefreshToken();
        if (access) {
          dispatch(setAuth(true));


          ws = new WebSocket(`ws://127.0.0.1:8000/ws?token=${encodeURIComponent(access)}`);
          ws.addEventListener("open", () => console.log("WS open"));
          ws.addEventListener("close", () => console.log("WS close")); // не делаем setAuth(false)
        } else if (refresh) {
          // TODO: тихий refresh → по успеху setAuth(true), по неуспеху setAuth(false)
          dispatch(setAuth(true));
        } else {
          dispatch(setAuth(false));
        }
      } finally {
        dispatch(setInitialized(true));
      }
    })();

    return () => { ws?.close(); };
  }, [dispatch]);

  return <>{children}</>;
}
