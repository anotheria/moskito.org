package net.anotheria.moskitoorg.shared.listener;

import net.anotheria.access.AccessService;
import net.anotheria.access.impl.AccessServiceFactory;
import net.anotheria.anoplass.api.APIFinder;
import net.anotheria.anoprise.metafactory.Extension;
import net.anotheria.anoprise.metafactory.MetaFactory;
import net.anotheria.anosite.access.AnoSiteAccessAPI;
import net.anotheria.anosite.access.AnoSiteAccessAPIFactory;
import net.anotheria.anosite.gen.shared.service.MetaFactoryConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * TODO comment this class
 *
 * @author lrosenberg
 * @since 09.05.14 00:00
 */
public class ContextInitializer implements ServletContextListener {

	private static Logger log = LoggerFactory.getLogger(ContextInitializer.class);

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		MetaFactoryConfigurator.configure();

		MetaFactory.addFactoryClass(AccessService.class, Extension.NONE, AccessServiceFactory.class);
		APIFinder.addAPIFactory(AnoSiteAccessAPI.class, new AnoSiteAccessAPIFactory());

		log.info("MoSKito org webpage is started");
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {

	}
}
