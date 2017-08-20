
import com.cdk.vims.dao.SupplierDAO;
import com.cdk.vims.model.Car;
import com.cdk.vims.model.Supplier;
import com.cdk.vims.service.CarService;
import com.cdk.vims.service.SupplierService;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.test.context.TestExecutionListeners;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class SupplierServiceTest {
    SupplierService service = new SupplierService();
    List<Supplier> list = new ArrayList<>();

    @Test
    public void testreadCars() throws Exception{
        SupplierDAO mockedSupplierDao = Mockito.mock(SupplierDAO.class);
        Supplier supplier1= new Supplier(100, "Sachin", "Audi", "A4", "Audi-A4.png", 6500000);
        Supplier supplier2 = new Supplier(200, "Ramesh", "BMW", "X1", "BMW-X1.png", 6000000);
        list.add(supplier1);
        list.add(supplier2);

        Mockito.when(mockedSupplierDao.getSuppliers("Audi", "A4")).thenReturn(list);
        service.setSupplierDAO(mockedSupplierDao);

        List<Supplier> supplier = (List<Supplier>) service.searchSuppliers("Audi", "A4");
        Assert.assertEquals(supplier, list);
    }
}
