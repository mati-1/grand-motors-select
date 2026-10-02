#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/74c98116b95a2cfbc68f13c27d8b0a13d854b2a37214f7648413507424ed6a9e/contract';
import endContract from '../../snapshots/74c98116b95a2cfbc68f13c27d8b0a13d854b2a37214f7648413507424ed6a9e/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/83949baff06455c25f3ef15c72c45fc8682d874bf85633c4c2f66cf26366fd80/contract';
import startContract from '../../snapshots/83949baff06455c25f3ef15c72c45fc8682d874bf85633c4c2f66cf26366fd80/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'Car',
        columns: [
          col('accidentFree', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('body', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('brand', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('carvertical', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('color', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('condition', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('country', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('doors', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('drive', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('engine', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('equipment', 'text[]', {
            notNull: true,
            codecRef: { codecId: 'pg/text@1', many: true },
          }),
          col('featured', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('fuel', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('interior', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('invoice', 'text', {
            notNull: true,
            default: lit('VAT MARŻA'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('location', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('mileage', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('model', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('negotiation', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('power', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('price', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('seats', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('available'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('statusType', 'text', {
            notNull: true,
            default: lit('sale'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('transmission', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('vin', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('voivodeship', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('year', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'Car_equipment_elem_not_null_a3f3a8f5',
            'array_position("equipment", NULL) IS NULL',
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'CarImage',
        columns: [
          col('carId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('fileName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isPrimary', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('mimeType', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('position', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('size', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('storageKey', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Car',
        constraint: 'Car_vin_key',
        columns: ['vin'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Car',
        constraint: 'Car_slug_key',
        columns: ['slug'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'CarImage',
        index: 'CarImage_carId_idx_a6cb4be7',
        columns: ['carId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'CarImage',
        foreignKey: {
          name: 'CarImage_carId_fkey',
          columns: ['carId'],
          references: { schema: 'public', table: 'Car', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
