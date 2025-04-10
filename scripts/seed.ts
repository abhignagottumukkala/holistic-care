import { Product } from '../models/Product';
import { Doctor } from '../models/Doctor';
import { HealthCondition } from '../models/HealthCondition';
import connectDB from '../lib/mongodb';

// Import mock data
import { products } from '../app/shop/page';
import { doctors } from '../app/consult/page';
import { medicineDatabase } from '../app/search/page';

async function seed() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await Doctor.deleteMany({});
    await HealthCondition.deleteMany({});

    // Insert products
    const insertedProducts = await Product.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products`);

    // Insert doctors
    const insertedDoctors = await Doctor.insertMany(doctors);
    console.log(`Inserted ${insertedDoctors.length} doctors`);

    // Insert health conditions
    const healthConditions = Object.values(medicineDatabase).map(condition => ({
      name: condition.name,
      description: condition.description,
      symptoms: condition.symptoms,
      treatments: condition.treatments
    }));
    
    const insertedConditions = await HealthCondition.insertMany(healthConditions);
    console.log(`Inserted ${insertedConditions.length} health conditions`);

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed(); 