import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database'
// import { logger } from 'Config/app'

export default class TraeMedallasController {
  public async index(ctx: HttpContextContract) {
    return 'GET Documento';
  }

  public async store({ request }: HttpContextContract ) {
    return {
      message: 'Ver Documentos',
      body: request.body(),
    };
  }

  public async show({ params, response }: HttpContextContract ) {
    const miSql = `select Rut_Dv,Segmento_ID,Segmento_Descripc from operaciones_tfp.dbo.Club_Beneficios_TFP where rut_dv = '${params.id}'`
    const user = await Database.rawQuery(miSql)

    if (user.length === 0) {
      response.status(204)
      return null;
    }
    return user[0];
  }

  public async update({ params }: HttpContextContract) {
    return 'PUT Ver Documentos! ' + params.id;
  }

  public async destroy({ params }: HttpContextContract) {
    return 'DELETE Ver Documentos ' + params.id;
  }
}
