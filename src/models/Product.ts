import * as Sequelize from 'sequelize';

interface IProductAttributes {
    id?: Int32Array; // id is an auto-generated UUID
    name: string;
    price: string; // DOUBLE is a string to preserve floating point precision
    archived?: boolean; // is false by default
    createdAt?: string;
    updatedAt?: string;
}

type ProductInstance = Sequelize.Instance<IProductAttributes> &
    IProductAttributes;

type ProductModel = Sequelize.Model<ProductInstance, IProductAttributes>;

const productFactory = (sequalize: Sequelize.Sequelize) => {
    const attributes: SequelizeAttributes<IProductAttributes> = {
        id: {
            defaultValue: Sequelize.INTEGER,
            primaryKey: true,
            type: Sequelize.UUID,
        },
        archived: {
            allowNull: false,
            defaultValue: false,
            type: Sequelize.BOOLEAN,
        },
        name: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    };
    const Product = sequalize.define<ProductInstance, IProductAttributes>(
        'Product',
        attributes
    );
    Product.associate = models => {
        Product.hasMany(models.Category, {
            foreignKey: 'productId',
            as: 'categories',
        });
    };
    return Product;
};

export { ProductModel, productFactory };
