import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreo_tableUser1761797664726 implements MigrationInterface {
    name = 'EliminandoCorreo_tableUser1761797664726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
