import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum EDrugType {
  REFERENCIA,
  SIMILAR,
  GENERICO,
}

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    name: 'manufacturer_id',
    nullable: false,
  })
  manufacturerId: number;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 255,
  })
  name: string;

  @Column('varchar', {
    name: 'description',
    nullable: false,
    length: 255,
  })
  description: string;

  @Column('varchar', {
    name: 'sku',
    nullable: true,
    length: 40,
  })
  sku: string | null;

  @Column('boolean', {
    name: 'can_redeem',
    nullable: false,
    default: false,
  })
  canRedeem: boolean;

  @Column('int', {
    name: 'pedcoins_to_redeem',
    nullable: false,
    default: 0,
  })
  pedcoinsToRedeem: number;

  @Column('varchar', {
    name: 'barcode',
    nullable: true,
    length: 20,
  })
  barcode: string | null;

  @Column('boolean', {
    name: 'has_stock',
    nullable: false,
    default: true,
  })
  hasStock: boolean;

  @Column('varchar', {
    name: 'drug_active_ingredient',
    nullable: true,
    length: 255,
  })
  drugActiveIngredient: string | null;

  @Column('boolean', {
    name: 'drug_is_fp',
    nullable: false,
    default: false,
    comment: 'fp = farmácia popular',
  })
  drugIsFp: boolean;

  @Column('boolean', {
    name: 'drug_controlled',
    nullable: false,
    default: false,
  })
  drugControlled: boolean;

  @Column('varchar', {
    name: 'drug_registration_number_ms',
    nullable: true,
    length: 25,
    comment: 'ms = Ministério da Saúde',
  })
  drugRegistrationNumberMs: string | null;

  @Column('enum', {
    name: 'drug_type',
    nullable: false,
    enum: [EDrugType.REFERENCIA, EDrugType.GENERICO, EDrugType.SIMILAR],
    enumName: 'EDrugType',
  })
  drugType: EDrugType;

  @Column('timestamp with time zone', {
    name: 'deletedAt',
    nullable: true,
  })
  deletedAt?: Date | null;
}

export default Product;
