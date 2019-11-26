const conn = require('../dbconfig');

module.exports = (app)=>{
   
    //RETURNS ALL CHAMPIONSHIPS AVAILABLE
    app.get('/championship/get_championship', (req, res) =>{

        let sql = `SELECT a.CODI_CAMPE as codi_campe, a.CODI_SITUA as situacao, 
        b.NOME_USUAR as criador,
        a.TITU_CAMPE as titulo, a.DESC_CAMPE as descricao, a.TEMA_CAMPE as tema, a.DATA_CRIAC as data_criacao 
        FROM campeonatos a
        join CADASTRO_USUARIO b on b.CODI_USUAR = a.CODI_USUAR;`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });

    //INSERT USER INTO CHAMPIONSHIP
    app.post('/championship/participate_championship', (req, res) =>{
        
        const {
            id_campeonato,
            id_usuario,
            id_imagem
        } = req.body

        let sql = `INSERT INTO participantes_campeonato (CODI_CAMPE, CODI_USUAR, CODI_IMAGE)
        VALUES ('${id_campeonato}', '${id_usuario}', '${id_imagem}')`;               
                                                                                        
        conn.query(sql, (err, results)=>{ 
            
            if(err){                                        
                res.sendStatus(400);                        
            }else{
                
                res.json({status : 200, results});
            }
        });   
    });
}

