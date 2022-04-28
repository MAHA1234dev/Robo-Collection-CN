import { Card, Typography } from "@material-ui/core";
export default function Sent() {
    return (
        <div className="d-flex col-9">
            <div className="col-3" >
                <Card style={{ backgroundColor: "#f8f9f9", borderRadius: "1%",}}>
                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "75%" }}>
                            Reference
                        </Typography>
                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                            LNHMBH00005678
                        </Typography>
                </Card>
            </div>

            <div className="col-3" style={{marginLeft:"1%"}}>
                <Card style={{backgroundColor: "#f8f9f9", borderRadius: "1%",}}>
                        <Typography className='px-2 text-muted' style={{ marginTop: "3%",fontSize: "75%" }}>
                            Medium
                        </Typography>
                        <Typography className='p-2 flex-grow-1' style={{ fontWeight:"bold",fontSize: "90%" }}>
                            Email
                        </Typography>
                </Card>
            </div>
            <div className="col-3" style={{marginLeft:"1%",marginRight:"3%"}}>
                <Card style={{ backgroundColor: "#f8f9f9", borderRadius: "1%",}}>
                        <Typography className='px-2 text-muted' style={{ marginTop:"3%",fontSize: "75%" }}>
                            Contact
                        </Typography>
                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                            surikr@gmail.com
                        </Typography>
                </Card>
            </div>

        </div>
    )
}