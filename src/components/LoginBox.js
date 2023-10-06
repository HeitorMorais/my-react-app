import React from 'react';

function LoginBox() {
    return (
        <div className='container'>
            <div className='caixa-login'>
                <div className='email-label'>
                    <label class="form-label">Email:</label>
                    <input type="email" name="email" class="form-control" id="email" />
                </div>
                <div className='senha-label'>
                    <label class="form-label">Senha:</label>
                    <input type="password" name="senha" class="form-control" id="senha" />
                </div>
                <div className='fazer-login'>
                    <p className='fazer-login-text'>Fazer Login</p>
                </div>
                <p className='cadastre-se'>Não tem login? Cadastre-se</p>
               
            </div>
            <div className='problema-login'>
                <p>Problemas com login?</p>

                <div className='falar-com-especialistas'>
                    <p>Falar com especialistas</p>
                </div>

                </div>
        </div>
    )
}

export default LoginBox;