import './../assets/styles/NotFound.css'
import { Link } from 'react-router-dom';
import { Header } from './../components/header';
import { Button } from "@mui/material";

export const NotFound = () => {
    
    return(
        <> 
            <Header></Header>
            <div className='notfound__container'>
                <h2>ページが見つかりませんでした。</h2>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button fullWidth sx={{
                                display: "block",
                                backgroundColor: "#ffffff",
                                border: "solid 1px #333333",
                                borderRadius: "10px",
                                maxWidth: "200px",
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
                            }}>
                        トップへ戻る
                    </Button>
                </Link>
            </div>
        </>
    );
}