import com.cdk.vims.dao.CarDAO;
import com.cdk.vims.model.Car;
import com.cdk.vims.service.CarService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.*;
import org.mockito.internal.matchers.Null;
import org.springframework.test.context.TestExecutionListeners;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class CarServiceTest {
    CarService service = new CarService();
    List<Car> list = new ArrayList<>();

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testreadCars() throws Exception{

        CarDAO mockedCarDao = Mockito.mock(CarDAO.class);
        Car car1 = new Car(1000, "Audi", "A4", 6500000, "Audi-A4.png", 10);
        Car car2 = new Car(2000, "BMW", "X1", 7200000, "BMW-X1.png", 5);
        list.add(car1);
        list.add(car2);

        Mockito.when(mockedCarDao.getCars("Audi", "A4")).thenReturn(list);
        service.setCarDAO(mockedCarDao);

        List<Car> car = (List<Car>) service.readCars("Audi", "A4");
        Assert.assertEquals(car, list);
    }

    @Test
    public void testreadAllCars() throws Exception {
        CarDAO mockedCarDao = Mockito.mock(CarDAO.class);
        Car car1 = new Car(1000, "Audi", "A4", 6500000, "Audi-A4.png", 10);
        Car car2 = new Car(2000, "BMW", "X1", 7200000, "BMW-X1.png", 5);
        list.add(car1);
        list.add(car2);

        Mockito.when(mockedCarDao.getAllCars()).thenReturn(list);
        service.setCarDAO(mockedCarDao);

        List<Car> car = (List<Car>) service.readAllCars();
        Assert.assertEquals(car, list);
    }

    @Test
    public void testSaveCars() throws Exception{
        CarDAO mockedCarDao = Mockito.mock(CarDAO.class);
        Car car1 = new Car(1000, "Audi", "A4", 6500000, "Audi-A4.png", 10);
        Car car2 = new Car(2000, "BMW", "X1", 7200000, "BMW-X1.png", 5);
        list.add(car1);
        list.add(car2);

        Mockito.when(mockedCarDao.save((Car)Matchers.anyObject())).thenReturn(car1.getVin());
        service.setCarDAO(mockedCarDao);

        int vin = service.save(car1);
        Assert.assertEquals(vin, car1.getVin());

    }

    @Test
    public void testremoveCars() throws Exception{
        CarDAO mockedCarDao = Mockito.mock(CarDAO.class);
        Car car1 = new Car(1000, "Audi", "A4", 6500000, "Audi-A4.png", 10);
        Car car2 = new Car(2000, "BMW", "X1", 7200000, "BMW-X1.png", 5);
        list.add(car1);
        list.add(car2);

        Mockito.when(mockedCarDao.getCars("Audi", "A4")).thenReturn(list);
        service.remove(car1.getVin(), car1.getQty());
        //Mockito.when(mockedCarDao.getCars("Audi", "A4")).thenReturn(list);
        //service.setCarDAO(mockedCarDao);
        List<Car> car = (List<Car>) service.readCars("Audi", "A4");
        Assert.assertEquals(car, list);
    }
}

