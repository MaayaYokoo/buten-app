import { Link } from 'react-router-dom';
import { RenderTenki } from './../components/renderTenki';
import { useLocation } from "react-router-dom";
import { Header } from './../components/header';
import { Button } from "@mui/material";
import logo from './../assets/images/logo.png'

export const TenkiPage = () => {
    const location = useLocation();
    const {state} = location;
    
    return(
        <>
            <Header />
            <RenderTenki 
                tenkiData={state.tenkiData}
                todoufuken={state.todoufuken}
            />
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button fullWidth sx={{
                        display: "block",
                        backgroundColor: "#ffffff",
                        border: "solid 1px #333333",
                        borderRadius: "10px",
                        width: 120,
                        height: 44 ,
                        fontSize: "20px",
                        textDecoration: "none",
                        color: "#333333",
                        fontWeight: 700,
                        boxShadow: "0 3px #989589",
                        margin: "24px auto",
                        "&:hover": {
                            boxShadow: "0"
                        }
                    }} 
                >
                    もどる
                </Button>
            </Link>
        </>
    );
}